import axios from 'axios'

export function getContacts() {
	return axios.get("http://localhost:8001/contacts")
}

export function getContact(id) {
	return axios.get(`http://localHost:8001/contacts/${id}`)
}