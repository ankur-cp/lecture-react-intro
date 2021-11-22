class Person:
    def __init__(self, name, dob):
        self.name = name
        self.dob = dob

    def get_name(self):
        return self.name




class Student(Person):
    def __init__(self, student_id, name, dob):
        super().__init__(name, dob)
        self.student_id = student_id

    def get_id(self):
        return self.student_id




s = Student(1, "Albert Einstein", "1879-03-14")
print(s.get_id(), s.get_name())