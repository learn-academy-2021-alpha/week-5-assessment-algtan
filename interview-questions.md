# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
  MVC pattern means splitting up the application into three parts: 1) model, 2) view, and 3) controller. The model contains the data, the view is the interface, and the controller is the behavior.

  Researched answer:
  The MVC pattern means that the application is split into three parts: 1) model, 2) view, and 3) controller. The model is the application data. The view is how that data is presented to the user. And the controller determines how the user, the model, and the view interact with each other.


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer:
  If an application has CRUD, it is using a database to store information. CRUD stands for Create, Read, Update, and Destroy.

  Researched answer:
  If an application has CRUD, taht means it is working with persistent storage (data that remains after power is turned off). CRUD stands for Create, Read, Update, Delete.


3. What is a relational database? Are there other kinds of databases?

  Your answer:
  A relational database means that there is information being stored that contains different keys (columns), and they can be accessed based on those keys, or different parameters. I'm not sure what other kinds of databases there are, but one I would assume is a static one. Here, information is stored, but specific information cannot be extracted from it.

  Researched answer:
  A relational database stores information in the form of tables. Those tables use rows for instances, and columns for keys within those instances. There are other kinds of databases, which are known as non-relational databases (NoSQL).


4. What are the 5 HTTP verbs? What are they important?

  Your answer:
  The three of the five HTTP verbs are patch, update, delete. All the verbs relate to CRUD. They are important as they relate to the process of returning information from a server to a local machine.

  Researched answer:
  The 5 HTTP verbs are 1) post, 2) get, 3) put, 4) patch, and 5) delete. These are important because these are the methods used for sending and receiving data from a server.


5. What is object-relational mapping?

  Your answer:
  Object-relational mapping is the process of making information from a database into objects to be used in an object-oriented approach.

  Researched answer:
  Object-relational mapping (ORM) is a technique that allows one to work in a database with an object-oriented approach.


6. What is a gem?

  Your answer:
  A gem is a plagin for Ruby.

  Researched answer:
  A packaged Ruby application or library. Gems allow users to share functionality with others.


7. What are primary keys? Why are they important?

  Your answer:
  Primary keys are the unique ID for instances in a database. They are important as they help to distinguish entries from each other.

  Researched answer:
  Primary keys are a unique way of identifying rows in a database. They are important because this helps to prevent similar instances from being confused with one another.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: RESTful routes provide a way of mapping HTTP verbs to CRUD actions.
- JSON: short for JavaScript Object Notation, which is a format for storing information similar to the format of a JavaScript object.
- Validations: checks done in Active Record that ensures that only valid data is inputted into a database.
- Strong params: determine what parameters get passed through from the controller.
