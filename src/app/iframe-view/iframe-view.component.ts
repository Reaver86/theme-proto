import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const IFRAME_URLS: ReadonlySet<string> = new Set(['neugeschaeft', 'bestand', 'inkasso', 'auftragsbuch']);

@Component({
  templateUrl: './iframe-view.component.html',
  styleUrls: ['./iframe-view.component.scss']
})
export class IframeViewComponent implements OnChanges {
  @Input() url: string;
  public safeUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.url && IFRAME_URLS.has(this.url)) {
      this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
          `/portal/${this.url}/index.html${this.url === 'bestand' ? '#/overview' : ''}`
      );
    }
  }
}
