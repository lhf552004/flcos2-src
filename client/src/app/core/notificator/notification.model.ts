export class Notification {
  constructor(
    // The content of the notification
    public message: string,
    // The type of notification. Using bootstrap styles
    public type: 'success' | 'info' | 'warning' | 'danger'
  ) {
  }

  // The id of the nofification as set by the notificator service
  public id: number;

  // The notification call out
  public get callOut(): string {
    switch (this.type) {
      case 'success':
        return 'Success !';
      case 'info':
        return 'Info';
      case 'warning':
        return 'Warning !';
      case 'danger':
        return 'Error !';
      default:
        return 'Info';
    }
  }
}
