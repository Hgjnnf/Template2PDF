from django.template.base import VariableNode, Template 
import io

class Utils():
    def get_variable_nodes(file):
        file_str = file.read()
        file_obj = file_str.decode('UTF-8')

        t = Template(file_obj)
        nodes = t.nodelist.get_nodes_by_type(VariableNode)

        node_names = [n.filter_expression.token for n in nodes]
        
        return node_names