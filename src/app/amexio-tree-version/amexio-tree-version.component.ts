import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amexio-tree-version',
  templateUrl: './amexio-tree-version.component.html',
  styleUrls: ['./amexio-tree-version.component.scss'],
})
export class AmexioTreeVersionComponent implements OnInit {
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
