import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchItem = '';
  constructor(activatedRoute:ActivatedRoute, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchItem']) this.searchItem = params['searchItem']
    })
  }

  ngOnInit(): void {
    
  }

  search(item:string):void{
    if (item)
    this.router.navigateByUrl('/search/' + item)
  }
}
