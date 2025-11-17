import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapDepartments',
  pure: true,
})
export class MapDepartmentsPipe implements PipeTransform {
  transform(list: any[]): string[] {
    if (!Array.isArray(list)) return [];
    const set = new Set<string>();
    list.forEach(item => {
      if (item?.department) set.add(item.department);
    });
    return Array.from(set);
  }
}
