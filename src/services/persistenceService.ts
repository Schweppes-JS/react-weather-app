export const persistanceService = {

  set(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  },
  
  get(key: string): string {
      return JSON.parse(localStorage.getItem(key)!);
  }
}