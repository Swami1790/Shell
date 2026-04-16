import { Pipe, PipeTransform } from '@angular/core';

/**
 * Status Pipe
 * Transforms raw string status (e.g. 'in_progress') into readable format ('In Progress').
 */
@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const formatted = value.replace(/_/g, ' ');
    return formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase();
  }
}
