from rest_framework.serializers import Serializer, FileField, DictField

# Serializers define the API representation.
class UploadSerializer(Serializer):
    file_uploaded = FileField()
    class Meta:
        fields = ['file_uploaded']

class DownloadSerializer(Serializer):
    file_downloaded = FileField()
    context_obj = DictField()
    class Meta:
        fields = ['file_downloaded', 'context_obj']