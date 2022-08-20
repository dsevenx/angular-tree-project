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
      text: 'Rahmen 1',
      items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' },
      ],
    },
    {
      text: 'Rahmen 2',
      items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' },
      ],
    },
  ];
  public items: any[] = [
    { text: 'Einzelvertrag', icon: 'create' },
    { text: 'Objektklasse', icon: '' },
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
        this.removeItem(this.contextItem, this.data);
      } else if (pEreignis.item.text === 'Einzelvertrag') {
        alert('Einzelvertrag: ' + this.contextItem.text);
        this.removeItem(this.contextItem, this.data);
      } else if (pEreignis.item.text === 'Objektklasse') {
        alert('Objektklasse: ' + this.contextItem.text);
        this.removeItem(this.contextItem, this.data);
      }
    }
  }

  private removeItem(dataItem: any, items: any[]): void {
    const index = items.indexOf(dataItem);
    if (index >= 0) {
      items.splice(index, 1);
    } else {
      items.forEach((item) => {
        if (item.items) {
          this.removeItem(dataItem, item.items);
        }
      });
    }
  }

  treeLocalData: any;
  rightclickdata: any;

  constructor() {
    this.rightclickdata = [
      { text: 'Add New', icon: 'fa fa-plus', disabled: true },
      { text: 'Edit', icon: '', seperator: true },
      { text: 'Send data in email', icon: '' },
    ];

    this.treeLocalData = {
      data: [
        {
          text: 'Web App',
          expand: true,
          children: [
            {
              text: 'app',
              expand: true,
              badge: 1,
              children: [
                {
                  leaf: true,
                  text: 'Application.js',
                },
              ],
            },
            {
              text: 'button',
              expand: true,
              badge: 3,
              children: [
                {
                  leaf: true,
                  text: 'Button.js',
                },
                {
                  leaf: true,
                  text: 'Cycle.js',
                },
                {
                  leaf: true,
                  text: 'Split.js',
                },
              ],
            },
            {
              text: 'container',
              expand: true,
              badge: 3,
              children: [
                {
                  leaf: true,
                  text: 'ButtonGroup.js',
                },
                {
                  leaf: true,
                  text: 'Container.js',
                },
                {
                  leaf: true,
                  text: 'Viewport.js',
                  expand: true,
                  children: [],
                  lazy: {
                    'http-url': 'data/treeview.json',
                    'http-method': 'get',
                  },
                },
              ],
            },
            {
              text: 'core',
              expand: true,
              badge: 1,
              children: [
                {
                  text: 'dom',
                  expand: true,
                  badge: 2,
                  children: [
                    {
                      leaf: true,
                      text: 'Element.form.js',
                    },
                    {
                      leaf: true,
                      text: 'Element.static-more.js',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
