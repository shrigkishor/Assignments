import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { MODE_KEY, Mode } from '../decorators/mode.decorator';

@Injectable()
export class ModeGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredModes = this.reflector.getAllAndOverride<Mode[]>(MODE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredModes) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredModes.some((mode) => user.currentMode === mode);
  }
}

