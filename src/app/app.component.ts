import { Component, OnInit } from '@angular/core';

import {Searchterm} from './searchterm.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public searchTerm: Searchterm;
	public searchEngines = [
		{id: 1, name: "Google"},
		{id: 2, name: "Bing"},
		{id: 3, name: "Ask"}
	  ];

	ngOnInit() {
		// initialize searchTerm model here
		this.searchTerm = {
			inputValue: '',
			selectedSearchEngine: ''
		}
	}

	public save(isValid: boolean, searchTerm: Searchterm) {
		console.log("Form: ", isValid, searchTerm);
		if (isValid) {
			let searchTermValue = encodeURI(searchTerm.inputValue.trim());
			switch (searchTerm.selectedSearchEngine) {
				case 'Google':
					window.open("https://www.google.com/search?q="+searchTermValue);
					break;
				case 'Bing':
					window.open("https://www.bing.com/search?q="+searchTermValue);
					break;
				case 'Ask':
					window.open("https://uk.ask.com/web?q="+searchTermValue);
					break;
				default:
					break;
			}
		}
	}

}
