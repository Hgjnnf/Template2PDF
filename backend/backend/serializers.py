from rest_framework.serializers import Serializer, FileField, JSONField, CharField

# Serializers define the API representation.
class UploadSerializer(Serializer):
    file_uploaded = FileField()
    class Meta:
        fields = ['file_uploaded']

class DownloadSerializer(Serializer):
    file_uploaded = FileField()
    context_obj = JSONField()
    file_name = CharField()
    class Meta:
        fields = ['file_uploaded', 'context_obj', 'file_name']