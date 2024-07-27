

export const worksheetFilters = () => {}

export const filtersInfo = {
     price : {
          title : 'قیمت کاربرگ : ',
          options : ["همه", "فقط رایگان"]
     } ,
     level : {
          title : 'سختی کاربرگ : ',
          options : ["همه",'آسان','متوسط','تسلا' ]
     } ,
     key : {
          title : 'پاسخنامه : ',
          options : ["همه",'دارد', 'ندارد']
     } ,
     rotation : {
          title : 'جهت کاربرگ : ',
          options : ["همه",'عمودی','افقی']
     } ,
     usableFor : {
          title : 'مناسب برای :',
          options : ["همه","برای تمرین و آزمون","مخصوص آزمون" ,"مخصوص تمرین" ]
     },
     type : {
          title : 'نوع کاربرگ : ',
          options : ["همه", 'تمرینی','مهارت محور','آماده سازی','بسطی-امتدادی','خلاقیتی','آزمون' ]
     }
}