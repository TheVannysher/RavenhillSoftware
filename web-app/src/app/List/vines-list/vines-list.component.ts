import { Component, OnInit } from '@angular/core';
import { Vine } from 'types/graphql';
import { v4 as uuid } from 'uuid';
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import db from 'src/lib/database';

@Component({
  selector: 'app-vines-list',
  templateUrl: './vines-list.component.html',
  styleUrls: ['./vines-list.component.scss']
})
export class VinesListComponent implements OnInit {
  rowList:any = [
    {
      vineList: [{id: '1'}, {id: '2'}]
    },
    {
      vineList: [{id: '1'}]
    },
    {
      vineList: [{id: '1'}]
    },
    {
      vineList: [{id: '1'}]
    },
  ];
  modalOpen: boolean = false;

  async ngOnInit() {
    const test = await this.getVines();
    console.log(test);
  }

  toggleCreateVineModal() {
    this.modalOpen = !this.modalOpen;
    console.log('toggled 🪟');
  }

  async handleAddVine(fields: any) {
    const docRef = await addDoc(collection(db, "vines"), {
      ...fields,
    })
  }

  async getVines() {
    const query = await getDocs(collection(db, 'vines'));
    let list:any = {};
    query.forEach(async (document) => {
      const data = document.data();
      let newData = {...data};
      if (newData["lastMaintenance"]) {
        const test = await (await getDoc(doc(db, `/tasks/${data["lastMaintenance"]}`))).data();
        newData = {
          ...data,
          lastMaintenance: test!["startDate"],
        }
      }
      const row = data['row'];
      if (list[row]) {
        list[row] = {
          rowNumber: row,
          vineList: list[row].vineList.push(data)
        }
      } else {
        list[row] = {
          rowNumber: row,
          vineList: [data],
        }
      }
    })
    return list;
  }
}
