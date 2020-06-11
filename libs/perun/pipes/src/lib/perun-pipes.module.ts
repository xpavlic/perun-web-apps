import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceTagsToStringPipe } from './resource-tags-to-string.pipe';
import { IsVirtualAttributePipe } from './is-virtual-attribute.pipe';
import { UserFullNamePipe } from './user-full-name.pipe';
import { ParseLastAccessPipe } from './parse-last-access.pipe';
import { GetMailFromAttributesPipe } from './get-mail-from-attributes.pipe';
import { CustomTranslatePipe } from './custom-translate.pipe';

@NgModule({
  declarations: [
    ResourceTagsToStringPipe,
    IsVirtualAttributePipe,
    UserFullNamePipe,
    ParseLastAccessPipe,
    GetMailFromAttributesPipe,
    CustomTranslatePipe
  ],
  exports: [
    ResourceTagsToStringPipe,
    IsVirtualAttributePipe,
    UserFullNamePipe,
    ParseLastAccessPipe,
    GetMailFromAttributesPipe,
    CustomTranslatePipe
  ],
  imports: [CommonModule],
})
export class PerunPipesModule {}
