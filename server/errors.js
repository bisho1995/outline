// @flow
import httpErrors from 'http-errors';

export function ValidationError(message: string = 'Validation failed') {
  return httpErrors(400, message, { id: 'validation_error' });
}

export function ParamRequiredError(
  message: string = 'Required parameter missing'
) {
  return httpErrors(400, message, { id: 'param_required' });
}

export function AuthorizationError(
  message: string = 'You do not have permission to access this resource'
) {
  return httpErrors(403, message, { id: 'permission_required' });
}

export function AdminRequiredError(
  message: string = 'An admin role is required to access this resource'
) {
  return httpErrors(403, message, { id: 'admin_required' });
}

export function NotFoundError(message: string = 'Resource not found') {
  return httpErrors(404, message, { id: 'not_found' });
}
