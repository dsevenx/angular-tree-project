import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';
import { NodeClickEvent } from '@progress/kendo-angular-treeview';

@Component({
  selector: 'app-amexio-tree-version',
  templateUrl: './amexio-tree-version.component.html',
  styleUrls: ['./amexio-tree-version.component.scss'],
})
export class AmexioTreeVersionComponent implements OnInit {
  @ViewChild('treemenu')
  public treeContextMenu: ContextMenuComponent;

  public data: any[] = [
    {
      text: 'Rahmen AS2225553334',
      items: [
        {
          text: 'Firmeinheit AS2224443334',
          items: [
            {
              text: 'Tarifmodell FP AS1114443334001',
              items: [
                {
                  text: 'Objektklasse AS1114443334001',
                  items: [
                    { text: 'Einzelvertrag AS111000001' },
                    { text: 'Einzelvertrag AS111000002' },
                    { text: 'Einzelvertrag AS111000003' },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: 'Firmeinheit AS2224443334',
          items: [
            {
              text: 'Tarifmodell FP AS2224443334001',
              items: [
                {
                  text: 'Objektklasse AS2224443334001',
                  items: [
                    { text: 'Einzelvertrag AS222000001' },
                    { text: 'Einzelvertrag AS222000002' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  public kontextmenuRahmen: any[] = [
    { text: 'Einzelvertrag', icon: 'create' },
    { text: 'Objektklasse', icon: 'info' },
    { text: 'Verzweigen', icon: 'info' },
    { text: 'Remove', icon: 'close' },
  ];

  public lastNode: any;
  private contextItem: any;

  onKeydown(event: any) {
    let isShiftKeyPressed = event.shiftKey;
    let isFTenPressed = event.key;
    this.contextItem = this.lastNode.item.dataItem;
    if (isShiftKeyPressed && isFTenPressed === 'F10') {
      this.treeContextMenu.show({
        left: this.lastNode.originalEvent.pageX,
        top: this.lastNode.originalEvent.pageY,
      });
    }
  }

  public onNodeClick(e: NodeClickEvent): void {
    this.lastNode = e;
    if (e && e.item && e.type === 'contextmenu') {
      const originalEvent = e.originalEvent;

      originalEvent.preventDefault();

      this.contextItem = e.item.dataItem;

      this.treeContextMenu.show({
        left: originalEvent.pageX,
        top: originalEvent.pageY,
      });
    }
  }

  public onSelect(pEreignis: any): void {
    if (pEreignis && pEreignis.item && pEreignis.item.text) {
      if (pEreignis.item.text === 'Remove') {
      } else if (pEreignis.item.text === 'Einzelvertrag') {
        alert('Einzelvertrag: ' + this.contextItem.text);
      } else if (pEreignis.item.text === 'Objektklasse') {
        alert('Objektklasse: ' + this.contextItem.text);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
