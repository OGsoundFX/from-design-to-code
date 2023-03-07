import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="movie-search"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
  }
  
  update() {
    console.log(this.formTarget.action)
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    // const url = "http://localhost:3000/movies?query=batman"
    fetch(url, {headers: {"Accept": "text/plain"}})
      .then(response => response.text())
      .then(data => this.listTarget.outerHTML = data)
  }
}
