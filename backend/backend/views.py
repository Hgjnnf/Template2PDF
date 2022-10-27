from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status
import json
from .utils import Utils
from .serializers import UploadSerializer, DownloadSerializer

class UploadViewSet(ViewSet):
    serializer_class = UploadSerializer
    
    def create(self, request):
        file_uploaded = request.FILES.get('file_uploaded')
        
        if not file_uploaded:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        if file_uploaded.content_type != 'text/html':
            return Response(status=status.HTTP_406_NOT_ACCEPTED)

        response = Utils.get_variable_nodes(file_uploaded.file)
        return Response(response)

class DownloadViewSet(ViewSet):
    serializer_class = DownloadSerializer

    def create(self, request):
        file_uploaded = request.FILES.get('file_uploaded')
        context_obj = request.data.get('context_obj')
        file_name = request.data.get('file_name')

        if not file_uploaded:
            return Response("No file was uploaded", status=status.HTTP_404_NOT_FOUND)
        if file_uploaded.content_type != 'text/html':
            return Response("Wrong file type", status=status.HTTP_406_NOT_ACCEPTED)
        if not context_obj:
            return Response("Missing context", status=status.HTTP_404_NOT_FOUND)
        if not file_name:
            return Response("Missing file name", status=status.HTTP_404_NOT_FOUND)

        context_dict = json.loads(context_obj)

        pdf = Utils.render_to_pdf(file_uploaded, context_dict)
        if pdf:
            response = Response(pdf, content_type='application/pdf')
            content = "attachement; filename='%s'" %(file_name)
            response['Content-Disposition'] = content
            return response
        return Response("File download failed", status=status.HTTP_404_NOT_FOUND)
