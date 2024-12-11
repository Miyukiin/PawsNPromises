
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

