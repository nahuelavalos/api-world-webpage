package main

import (
	"encoding/json"
	"net/http"
	"strconv"
	"strings"
)

type Person struct {
	ID        string   `json:"id,omitempty"`
	FirstName string   `json:"firstname,omitempty"`
	LastName  string   `json:"lastname,omitempty"`
	Address   *Address `json:"address,omitempty"`
}

type Address struct {
	Street string `json:"street,omitempty"`
	Number string `json:"number,omitempty"`
}

var people []Person

func main() {
	// Repository
	people = append(people, Person{ID: "1", FirstName: "Julio", LastName: "Verne", Address: &Address{Street: "Gral. Paz", Number: "6655"}})
	people = append(people, Person{ID: "2", FirstName: "Rosa", LastName: "Lia", Address: &Address{Street: "Catriel", Number: "1804"}})
	people = append(people, Person{ID: "3", FirstName: "Lazy"})

	// Routes
	http.HandleFunc("/people", peopleHandler)
	http.HandleFunc("/people/", personHandler)

	// Port
	http.ListenAndServe(":8080", nil)
}

// Handler /people (All)
func peopleHandler(response http.ResponseWriter, request *http.Request) {
	switch request.Method {
	case "GET":
		getPeople(response)
	case "POST":
		createPerson(response, request)
	default:
		http.Error(response, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

// Handler /people/{id} (Individual)
func personHandler(response http.ResponseWriter, request *http.Request) {
	id := strings.TrimPrefix(request.URL.Path, "/people/")
	if id == "" {
		http.Error(response, "ID is required", http.StatusBadRequest)
		return
	}

	switch request.Method {
	case "GET":
		getPerson(response, id)
	case "PUT":
		updatePerson(response, request, id)
	case "DELETE":
		deletePerson(response, id)
	default:
		http.Error(response, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func getPeople(response http.ResponseWriter) {
	json.NewEncoder(response).Encode(people)
}

func createPerson(response http.ResponseWriter, request *http.Request) {
	var person Person
	_ = json.NewDecoder(request.Body).Decode(&person)
	person.ID = generateNewID()
	people = append(people, person)
	json.NewEncoder(response).Encode(person)
}

func updatePerson(response http.ResponseWriter, request *http.Request, id string) {
	var person Person
	_ = json.NewDecoder(request.Body).Decode(&person)
	for i, item := range people {
		if item.ID == id {
			people[i].FirstName = person.FirstName
			people[i].LastName = person.LastName
			people[i].Address = person.Address
			json.NewEncoder(response).Encode(people[i])
			return
		}
	}
	http.Error(response, "Person not found", http.StatusNotFound)
}

func deletePerson(response http.ResponseWriter, id string) {
	for index, item := range people {
		if item.ID == id {
			people = append(people[:index], people[index+1:]...)
			json.NewEncoder(response).Encode(people)
			return
		}
	}
	http.Error(response, "Person not found", http.StatusNotFound)
}

func getPerson(response http.ResponseWriter, id string) {
	for _, item := range people {
		if item.ID == id {
			json.NewEncoder(response).Encode(item)
			return
		}
	}
	http.Error(response, "Person not found", http.StatusNotFound)
}

// Generate a new unique ID
func generateNewID() string {
	return strconv.Itoa(len(people) + 1)
}
