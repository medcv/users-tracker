from rest_framework import serializers

from posts.models import Posts


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('id', 'lab_name', 'browser', 'email', 'job', 'game', 'video', 'resume', 'created_at')
