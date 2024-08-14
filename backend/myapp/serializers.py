from .models import NewsletterClient
from rest_framework import serializers

class NewsletterClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterClient
        fields = '__all__'


