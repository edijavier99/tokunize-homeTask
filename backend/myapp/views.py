from django.shortcuts import render
from .models import NewsletterClient
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NewsletterClientSerializer
from .welcomeEmail import send_welcome_email

@api_view(['POST'])
def newsletter_register(request):
    email = request.data.get('client_email')  # Asegúrate de obtener el email del request data

    # Verifica si el email ya existe en la base de datos
    if NewsletterClient.objects.filter(client_email=email).exists():
        return Response({"error": "You are already added in our newsletter."}, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = NewsletterClientSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()

        # Envía el correo de verificación
        if send_welcome_email(email):
            return Response({"message": "You've been added to the newsletter list. A welcoming email has been sent."}, status=status.HTTP_201_CREATED)
        else:
            return Response({"error": "Failed to send verification email."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def newsletter_register_list(request):
    try:
        registered_list = NewsletterClient.objects.all()
        serializer = NewsletterClientSerializer(registered_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)