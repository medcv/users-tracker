from django.test import TestCase

from labs.models import Labs
from labs.serializers import LabsSerializer
from django.core.exceptions import ObjectDoesNotExist


class LabsTestCase(TestCase):
    def setUp(self):
        Labs.objects.create(lab_name="BurkeTest")
        Labs.objects.create(id=30000)

    def test_labs_happy_path(self):
        burke = Labs.objects.get(lab_name="BurkeTest")
        self.assertEqual(burke.lab_name, "BurkeTest")

    def test_labs_unhappy_path(self):
        default = Labs.objects.get(id=30000)
        self.assertEquals(default.lab_name, "")

    def test_serializer_happy_path(self):
        lab = Labs.objects.get(lab_name="BurkeTest")
        serialized_lab = LabsSerializer(lab)
        self.assertEquals(serialized_lab.data.get("lab_name"), "BurkeTest")

    def test_serializer_unhappy_path(self):
        try:
            lab = Labs.objects.get(lab_name="NotExist")
            self.fail("Not exist item")
        except ObjectDoesNotExist:
            pass
