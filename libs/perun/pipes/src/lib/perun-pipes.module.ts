import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceTagsToStringPipe } from './resource-tags-to-string.pipe';

@NgModule({
  declarations: [
    ResourceTagsToStringPipe
  ],
  exports: [
    ResourceTagsToStringPipe
  ],
  imports: [CommonModule],
})
export class PerunPipesModule {}
