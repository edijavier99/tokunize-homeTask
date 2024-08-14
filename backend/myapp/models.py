from django.db import models

# Create your models here.

class NewsletterClient(models.Model):
    client_email = models.EmailField(unique = True)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.client_email
    

