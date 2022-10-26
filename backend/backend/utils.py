from django.template.base import VariableNode, Template 
import io
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa



class Utils():
    def get_variable_nodes(file):
        file_str = file.read()
        file_obj = file_str.decode('UTF-8')

        t = Template(file_obj)
        nodes = t.nodelist.get_nodes_by_type(VariableNode)

        node_names = [n.filter_expression.token for n in nodes]
        
        return node_names
    
    def render_to_pdf(template_src, context_dict={}):
        template = get_template(template_src)
        html  = template.render(context_dict)
        result = io.BytesIO()
        pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
        if not pdf.err:
            return HttpResponse(result.getvalue(), content_type='application/pdf')
        return None