from app.models import Volunteer


class PetSerializer:
    def __init__(self, pet):
        self.id = pet.id
        self.name = pet.name
        self.animal = pet.breed.animal_type
        self.breed = pet.breed
        self.age = pet.age
        self.size = pet.size
        self.gender = pet.gender
        self.shelter = pet.shelter
        self.description = pet.description
        self.medical_description = pet.medical_description

        # TODO: Implement proper images
        self.imageSrc = "/image/default-image.png"

    def dict_display(self):
        return {
            'id': self.id,
            'name': self.name,
            'animal': self.animal.name,
            'breed': self.breed.name,
            'age': self.age.name,
            'size': self.size.get_name_display(),
            'gender': self.gender.get_name_display(),
            'shelter_id': self.shelter.id,
            'shelter_name': self.shelter.name,
            'description': self.description,
            'medical_description': self.medical_description,
            'imageSrc': self.imageSrc,
        }

class ShelterSerializer:
    def __init__(self, shelter):
        self.id = shelter.id
        self.name = shelter.name
        self.contact_number = shelter.contact_number
        self.email = shelter.email
        self.link = shelter.link

    def dict_display(self):
        return {
            'id': self.id,
            'name': self.name,
            'contact_number': self.contact_number,
            'email': self.email,
            'link': self.link
        }

class VolunteerSerializer:
    def __init__(self, formData):       
        self.firstName = formData.get('firstName', '').strip()
        self.lastName = formData.get('lastName', '').strip()
        self.age = formData.get('age', '')
        self.email = formData.get('email', '').strip()
        self.contact = formData.get('contact', '').strip()
        self.address = formData.get('address', '').strip()

        self._is_valid = False
        self.errors = {}
        self.model_instance = None

    def validate(self):
        """
        Validate the provided data and populate the errors dictionary.
        """
        self.errors = {} 

        if not self.firstName:
            self.errors['firstName'] = 'First name is required.'

        if not self.lastName:
            self.errors['lastName'] = 'Last name is required.'

        if not self.age.isdigit() or int(self.age) <= 0:
            self.errors['age'] = 'Age must be a positive number.'

        if not self.email or '@' not in self.email:
            self.errors['email'] = 'Invalid email address.'

        if not self.contact or not self.contact.isdigit():
            self.errors['contact'] = 'Contact must be a valid phone number.'

        if not self.address:
            self.errors['address'] = 'Address is required.'

        self._is_valid = len(self.errors) == 0

    def is_valid(self):
        """
        Returns True if the data is valid, False otherwise.
        """
        self.validate()
        return self._is_valid
    
    def save(self):
        """
        Save the validated data into the Volunteer model.

        Returns:
            Volunteer: The saved Volunteer instance.
        """
        if not self._is_valid:
            raise ValueError("Cannot save data. Validation errors: {}".format(self.errors))

        # Create a new Volunteer instance, then pass it back because we'll need it for sending email appreciation.
        self.model_instance = Volunteer.objects.create(
            first_name=self.firstName,
            last_name=self.lastName,
            age=self.age,
            email=self.email,
            contact_number=self.contact,
            address=self.address,
        )
        return self.model_instance
    
    def dict_display(self):
        """
        Return a dictionary representation of the validated data.
        """
        return {
            "firstName": self.firstName,
            "lastName": self.lastName,
            "age": self.age,
            "email": self.email,
            "contact": self.contact,
            "address": self.address,
        }
