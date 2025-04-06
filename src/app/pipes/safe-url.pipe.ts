import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true,
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    // Convert shorts or watch URL to embed
    let embedUrl = value;
    if (value.includes('youtube.com/shorts/')) {
      embedUrl = value.replace('youtube.com/shorts/', 'youtube.com/embed/');
    } else if (value.includes('watch?v=')) {
      const videoId = value.split('watch?v=')[1];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
