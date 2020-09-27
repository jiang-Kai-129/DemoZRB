$(function() {
  
    var folder = $("#main .folder"),  //文件夹
      front = folder.find('.front'), //文件夹前面部分
      img = $("#main img"), //容器main中的所有图片
      droppedCount = 0;  //记数器
    
    img.draggable(); //使所有图片可以拖拽
    
    folder.droppable({ //droppable事件,即拖拽到文件夹时触发的事件
      drop : function(event, ui) {//释放时触发
          
        // 移动拖拽的图片
        ui.draggable.remove();
          
        // 给计数器加1
        front.text(++droppedCount);
          
      },
        
      activate : function(){ //拖拽时让文件夹打开
          
        folder.addClass('open');
      },
        
      deactivate : function(){ //停止拖拽时让文件夹关闭
        folder.removeClass('open');
      }
    });
  });