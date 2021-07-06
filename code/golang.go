package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

type Person struct {
	ID        string  `json:"id,omitempty"`
	FirstName string  `json:"firstname,omitempty"`
	LastName  string  `json:"lastname,omitempty"`
	Adress    *Adress `json:"adress,omitempty"`
}

type Adress struct {
	Street string `json:"street,omitempty"`
	Number string `json:"number,omitempty"`
}

//Repository
var people []Person

func main() {
	people = append(people, Person{ID: "1", FirstName: "Julio", LastName: "Verne", Adress: &Adress{Street: "Gral. Paz", Number: "6655"}})
	people = append(people, Person{ID: "2", FirstName: "Rosa", LastName: "Lia", Adress: &Adress{Street: "Catriel", Number: "1804"}})
	people = append(people, Person{ID: "3", FirstName: "Lazy"})

	//Routes
	router := mux.NewRouter()
	router.HandleFunc("/people", getPeople).Methods("GET")
	router.HandleFunc("/people/{id}", getPerson).Methods("GET")
	router.HandleFunc("/people/{id}", createPerson).Methods("POST")
	router.HandleFunc("/people/{id}", updatePerson).Methods("PUT")
	router.HandleFunc("/people/{id}", deletePerson).Methods("DELETE")

	//Port
	http.ListenAndServe(":8080", router)
}

func getPeople(response http.ResponseWriter, request *http.Request) {
	json.NewEncoder(response).Encode(people)
}

func createPerson(response http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	var person Person
	_ = json.NewDecoder(request.Body).Decode(&person)
	person.ID = params["id"]
	people = append(people, person)
	json.NewEncoder(response).Encode(person)

}

func updatePerson(response http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	var person Person
	_ = json.NewDecoder(request.Body).Decode(&person)
	for i, item := range people {
		if item.ID == params["id"] {
			people[i].FirstName = person.FirstName
			people[i].LastName = person.LastName
			people[i].Adress = person.Adress
			break
		}
	}
	json.NewEncoder(response).Encode(people)
}

func deletePerson(response http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	for index, item := range people {
		if item.ID == params["id"] {
			people = append(people[:index], people[index+1:]...)
			break
		}
	}
	json.NewEncoder(response).Encode(people)
}

func getPerson(response http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	for _, item := range people {
		if item.ID == params["id"] {
			json.NewEncoder(response).Encode(item)
			return
		}
	}
	json.NewEncoder(response).Encode(&Person{})
}
