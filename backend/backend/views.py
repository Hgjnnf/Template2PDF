
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status
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
        print(request.data)
        return Response("test")
