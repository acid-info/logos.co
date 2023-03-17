## Description

Content of `https://logos.co` website. 

## Practical notes
- Please keep this repo clean and for markdown content ONLY
- In case you have any issue with rendering, how website looks (design), etc, please file an issue on [logos website builder](https://github.com/acid-info/logos-site-builder/issues). And/or feel free to contact Amir.

## Continuous Integration

Two branches are built by [our Jenkins instance](https://ci.infra.status.im/):

* `master` branch is deployed to https://logos.co by [CI](https://ci.infra.status.im/job/website/job/logos.co/).
* `develop` branch is deployed to https://dev.logos.co by [CI](https://ci.infra.status.im/job/website/job/dev.logos.co/).

PRs should be made for `develop` branch and `master` should be [rebased](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) on `develop` once changes are verified.

```logos-ascii
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0kdlc;,...            ...';cldk0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMNKkoc,..                              ..,:okKNMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMWKxl,.                                          .,cxKNMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMNOo;.                 .':lodxxxxdol:,.                 .,oONMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMW0o,.                .,lkKNMMMMMMMMMMMWNKkl,.                .,o0NMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMWXx;.                 .lONMMMMMMMMMMMMMMMMMMMMN0l.                 .;xXWMMMMMMMMMMMMMM
MMMMMMMMMMMMWKo'                  .lKWMMMMMMMMMMMMMMMMMMMMMMMMWKl.                  'oKWMMMMMMMMMMMM
MMMMMMMMMMWKo.                   ,OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO,                   .lKWMMMMMMMMMM
MMMMMMMMMXd.                    ;0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;                    .dXMMMMMMMMM
MMMMMMMWO;                     'OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'                     ,kWMMMMMMM
MMMMMMXo.                      oWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.                     .lXMMMMMM
MMMMMX:                       .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO.                       ;KMMMMM
MMMMMx.                       '0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                       .dMMMMM
MMMMMK;                       .OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'                       ;0MMMMM
MMMMMMXl.                     .oWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.                     .lXMMMMMM
MMMMMMMWO,                     '0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0,                     ,kWMMMMMMM
MMMMMMMMMXd.                    ;KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK:                    .dXMMMMMMMMM
MMMMMMMMMMWKo.                   ,OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO;                   .oKWMMMMMMMMMM
MMMMMMMMMMMMWKo'                  .oKWMMMMMMMMMMMMMMMMMMMMMMMMWKo.                  'oKWMMMMMMMMMMMM
MMMMMMMMMMMMMMMXx;.                 .l0WMMMMMMMMMMMMMMMMMMMMW0o.                 .;xXWMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMN0l'                 .;oOXWMMMMMMMMMMMMWXOo;.                 'lONMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMNOl,.                 .,cldxxxxxxdlc,.                 .,lONMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMN0xc'.                                          .'cd0NMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMNKko:'.                                .':okKNMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXOxol:,'...            ...',:loxOXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXK00OkkxxxxkkO00KXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXN
....................................................................................................
                                                                                                   
                                       ...',;;::cc::;;,'...                                        
                               ..,:ldkO0KXNWWWWMMMMMWWWNXX0Okdl:,..                                
                          .':ok0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0ko:'.                           
                       'cd0NWMMMMMMMMMMMMMMMWWNNXXXNWWMMMMMMMMMMMMMMMWN0xc'                        
                   .,oONWMMMMMMMMMMMMMMNKkoc;,'....',;cok0NMMMMMMMMMMMMMMMNOo;.                    
                 'o0NMMMMMMMMMMMMMMMNOl,.                .,lONMMMMMMMMMMMMMMMW0o,                  
              .:kNMMMMMMMMMMMMMMMMXd,                        ,dXMMMMMMMMMMMMMMMMNk:.               
            .l0WMMMMMMMMMMMMMMMMNk,                            'kNMMMMMMMMMMMMMMMMW0l.             
          .lKWMMMMMMMMMMMMMMMMMXl.                              .lXMMMMMMMMMMMMMMMMMWKl.           
        .c0WMMMMMMMMMMMMMMMMMMXl                                  cXMMMMMMMMMMMMMMMMMMW0c.         
       ,kWMMMMMMMMMMMMMMMMMMMWd.                                  .dWMMMMMMMMMMMMMMMMMMMWk,        
     .lXMMMMMMMMMMMMMMMMMMMMMK,                                    ,KMMMMMMMMMMMMMMMMMMMMMXo.      
    .xWMMMMMMMMMMMMMMMMMMMMMMO.                                    .kMMMMMMMMMMMMMMMMMMMMMMWk.     
    ,KMMMMMMMMMMMMMMMMMMMMMMMk.                                    .xMMMMMMMMMMMMMMMMMMMMMMMK;     
     cXMMMMMMMMMMMMMMMMMMMMMMO.                                    .OMMMMMMMMMMMMMMMMMMMMMMXc      
      ,OWMMMMMMMMMMMMMMMMMMMMX:                                    :XMMMMMMMMMMMMMMMMMMMMWO,       
       .lXMMMMMMMMMMMMMMMMMMMMO'                                  .kWMMMMMMMMMMMMMMMMMMMXo.        
         'xXMMMMMMMMMMMMMMMMMMWx.                                .xWMMMMMMMMMMMMMMMMMMNx'          
           ,xXMMMMMMMMMMMMMMMMMWk,                              'kWMMMMMMMMMMMMMMMMMNx,            
             ,dXWMMMMMMMMMMMMMMMMXo.                          .lKMMMMMMMMMMMMMMMMWXd,              
               .lONMMMMMMMMMMMMMMMWKo,.                     ,oKWMMMMMMMMMMMMMMMNOl.                
                 .,o0NMMMMMMMMMMMMMMMNOo:..            ..;oONMMMMMMMMMMMMMMMN0o,.                  
                    .,lkXWMMMMMMMMMMMMMMWN0kdollllllodk0XWMMMMMMMMMMMMMMWXkl,.                     
                        .;okKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKko;.                         
                            .,:ox0XNWMMMMMMMMMMMMMMMMMMMMMMMMWNX0xo:'.                             
                                  .';:lodxkO00KKKKK000Okxdol:;'.                                   
                                             ........
```

