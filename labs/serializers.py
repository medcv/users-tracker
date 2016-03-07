from rest_framework import serializers
from labs.models import Labs


class LabsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Labs
        fields = ('id', 'lab_name')
