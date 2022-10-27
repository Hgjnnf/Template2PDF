from rest_framework.serializers import Serializer, FileField, JSONField

# Serializers define the API representation.
class UploadSerializer(Serializer):
    file_uploaded = FileField()
    class Meta:
        fields = ['file_uploaded']

class DownloadSerializer(Serializer):
    file_downloaded = FileField()
    context_obj = JSONField()
    class Meta:
        fields = ['file_downloaded', 'context_obj']