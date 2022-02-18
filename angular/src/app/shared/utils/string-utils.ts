export class StringUtils{
   static readonly DASH_ESP: string = ' - ';
   static readonly ESPACE: string = ' ';
   static readonly SLASH_ESP: string = ' / ';
   static readonly EMPTY: string = '';
   static readonly SLASH: string = '/';


   static compareIgnoreCase(firstString: string, secondString: string): number{
      let first: string = this.isBlank(firstString) ? this.EMPTY : firstString.toLowerCase();
      let second: string = this.isBlank(secondString) ? this.EMPTY : secondString.toLowerCase();

      if (first > second) {
         return 1;
      }

      if (first < second) {
         return -1;
      }

      return 0;
   }

   static isEmpty(motif: string): boolean{
      return !motif || motif === StringUtils.EMPTY;
   }

   static isNotEmpty(motif: string): boolean{
      return !this.isEmpty(motif);
   }

   static isBlank(motif: string): boolean{
      return this.isEmpty(motif) || motif.trim() === StringUtils.EMPTY;
   }

   static isNotBlank(motif: string): boolean{
      return !this.isBlank(motif);
   }

   private static isTabValid(tabStr: string[]): boolean{
      return tabStr && tabStr.length > 0
   }

   static isAllEmpty(...tabStr: string[]): boolean{
      return this.isTabValid(tabStr) && tabStr.every(value => this.isEmpty(value));
   }

   static isNoneEmpty(...tabStr: string[]): boolean{
      return this.isTabValid(tabStr) && tabStr.every(value => this.isNotEmpty(value));
   }

   static isAnyEmpty(...tabStr: string[]): boolean{
      return this.isTabValid(tabStr) && tabStr.some(value => this.isEmpty(value));
   }

   static isAllBlank(...tabStr: string[]): boolean{
      return this.isTabValid(tabStr) && tabStr.every(value => this.isBlank(value));
   }

   static isNoneBlank(...tabStr: string[]): boolean{
      return this.isTabValid(tabStr) && tabStr.every(value => this.isNotBlank(value));
   }

   static isAnyBlank(...tabStr: string[]): boolean{
      return this.isTabValid(tabStr) && tabStr.some(value => this.isBlank(value));
   }

   static includesIgnoreCase(searchValue: string, str: string): boolean{
      return StringUtils.isNoneBlank(searchValue, str) && str.toLowerCase().includes(searchValue.toLowerCase());
   }

   static includes(searchValue: string, str: string): boolean{
      return StringUtils.isNotBlank(str) && str.includes(searchValue);
   }


}