from django.template.base import VariableNode, Template
from django.template import Context 
import io
from django.http import HttpResponse
from xhtml2pdf import pisa



class Utils():
    def convert_file(file):
        file_str = file.read()
        return file_str.decode('UTF-8')

    def get_variable_nodes(file):
        file_obj = Utils.convert_file(file)

        t = Template(file_obj)
        nodes = t.nodelist.get_nodes_by_type(VariableNode)

        node_names = set()

        for n in nodes:
            node_names.add(n.filter_expression.token)
        
        return list(node_names)
    
    def render_to_pdf(template_src, context_dict={}):
        file_obj = Utils.convert_file(template_src)

        template = Template(file_obj)
        html  = template.render(Context(context_dict))
        result = io.BytesIO()
        pdf = pisa.pisaDocument(io.BytesIO(html.encode("UTF-8")), result)
        
        if not pdf.err:
            return HttpResponse(result.getvalue(), content_type='application/pdf')
        return None