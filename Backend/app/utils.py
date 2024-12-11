from django.core.mail import send_mail, BadHeaderError
from django.core.exceptions import ImproperlyConfigured

def send_volunteer_appreciation_email(volunteer):
    """
    Sends an appreciation email to the volunteer's email.

    Args:
        volunteer (Volunteer): An instance of the Volunteer model containing the volunteer's details.
        
    Returns:
        None
    """
    try:
        send_mail(
            subject="Thank You for Volunteering!",
            message = f"""
                        Dear {"".join([volunteer.first_name, " ", volunteer.last_name])},

                        Thank you for volunteering with us! Your efforts help make a difference in providing every stray friend with a loving home and family.

                        We'll reach out to you again soon with more details. Look forward to hearing from us!
                    
                        If you have any questions, please contact us at pawsnpromises@gmail.com

                        Best regards,
                        The Paws and Promises Team
                        """,
            from_email="noreply@example.com",
            recipient_list=[volunteer.email],
            fail_silently=False, # Raise an smtplib.SMTPException if an error occurs.
        )
    except BadHeaderError:
        print("Invalid email header found.")
    except ImproperlyConfigured as e:
        print(f"Email configuration error: {str(e)}")
    except Exception as e:
        print(f"An unexpected error occurred: {str(e)}")
