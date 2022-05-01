import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { AutosizeModule } from 'ngx-autosize';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  user_name: string = 'user';
  show: boolean = false;
  textarea_show: boolean = false;
  cards_of_key_partners: card[] = [];
  cards_of_key_actions: card[] = [];
  cards_of_key_resources: card[] = [];
  cards_of_value_proposition: card[] = [];
  cards_of_customer_relationships: card[] = [];
  cards_of_channels: card[] = [];
  cards_of_customer_segments: card[] = [];
  cards_of_cost_structure: card[] = [];
  cards_of_income_streams: card[] = [];

  temp_text: string = '';
  vamps = [
    {
      name: 'Bad Vamp',
      text: 'etxteexttsfgsdghjf fkjdsfhdjksf dsfjdsgfds fdgfjdsgf dfskdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
    {
      name: 'Petrovitch the Slain',
      text: 'etxteexttsfgsdghjf fkjdsfhdjksf dsfjdsgfds fdgfjdsgf dfskdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
    {
      name: 'Bob of the Everglades',
      text: 'etxteexttsfgsdghjf fkjdsfhdjksf dsfjdsgfds fdgfjdsgf dfskdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
    {
      name: 'The Optimistic Reaper',
      text: 'etxteexttsfgsdghjf fkjdsfhdjksf dsfjdsgfds fdgfjdsgf dfskdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
  ];

  vamps2 = [
    {
      name: 'Dracula',
      text: 'etxteexttsfgsdghjf fkjdsfhdjksf dsfjdsgfds fdgfjdsgf dfskdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
    {
      name: 'Kurz',
      text: 'etxteexttsfgsdghjf fkjdsfhdjksf dsfjdsgfds fdgfjdsgf dfskdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
    {
      name: 'Vladislav',
      text: 'etxteexttsfgsdghjf fkjdsfhdjksf dsfjdsgfds fdgfjdsgf dfskdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
    {
      name: 'Deacon',
      text: 'etxteexttsfgsdghjf fkjdsfhdjksf dsfjdsgfds fdgfjdsgf dfskdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
  ];

  vamps3 = [
    {
      name: 'Melisto',
      text: 'Здесь могла быть ваша рек',
      date: 1232213,
      change: false,
      show_text: true,
    },
    {
      name: 'PUDGE',
      text: 'Реклама',
      date: 1232213,
      change: false,
      show_text: true,
    },
    {
      name: 'Mstislave',
      text: 'edsadkdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
    {
      name: 'Dyacon',
      text: 'etxteexttsfgsdghjf fkjdsfhdjksf dsfjdsgfds fdgfjdsgf dfskdsf',
      date: 1232213,
      change: false,
      show_text: true,
    },
  ];

  constructor(private dragulaService: DragulaService) {
    // use these if you want

    this.dragulaService.createGroup('segments', {
      // ...
    });

    // this.dragulaService.dropModel('VAMPIRES').subscribe((args) => {
    //   console.log(args);
    // });
  }
  ngOnInit() {}
  changeText(index, id_block) {
    switch (id_block) {
      case 0:
        this.vamps[index].show_text = false;
        break;
      case 1:
        this.vamps2[index].show_text = false;
        break;
      default:
        console.log(index, id_block);
        break;
    }
    // this.textarea_show=true;
  }
  inputText(event) {
    console.log('change', event);
    this.show = true;
  }
  clickOk() {
    console.log('click');
    this.show = false;
    this.textarea_show = false;
  }
  onCtrlEnter(index, id_block) {
    switch (id_block) {
      case 0:
        this.vamps[index].show_text = true;
        break;
      case 1:
        this.vamps2[index].show_text = true;
        break;
      default:
        console.log(index, id_block);
        break;
    }
    // this.show = false;
    // this.textarea_show=false;
  }
  addCard(type) {
    switch (type) {
      case 0:
        this.vamps.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          change: false,
          show_text: false,
        });
        break;
      case 1:
        this.vamps2.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          change: false,
          show_text: false,
        });
        break;
      default:
        console.log(type);
        break;
    }
  }
}
type card = {
  name: string[];
  text: string[];
  date: number;
};
