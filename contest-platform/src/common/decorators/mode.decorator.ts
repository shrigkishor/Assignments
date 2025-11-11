import { SetMetadata } from '@nestjs/common';

export enum Mode {
  USER = 'USER',
  ORGANIZATION = 'ORGANIZATION',
}

export const MODE_KEY = 'mode';
export const RequireMode = (...modes: Mode[]) => SetMetadata(MODE_KEY, modes);

