

		
 			 

			// Add a title:

 			function DrawGraph(data,source,target){

 				var height = 600;
			    
				var rose = Chart.rose();			

				var causes=[source,target];

				// Where the maximum value gives us the maximum radius:
				var maxRadius = 40;

				data.forEach(function(d){
					d[source]=d[source];
					d[target]=d[target];
					d.label=d.label;
				});
				// Divide the dataset in two:
				var	dataset1 = data.slice(0,12);
				
				// Append a new figure to the DOM:
				figure = d3.select( 'body' )
					.append( 'figure' );

				// Get the figure width:
				width = parseInt( figure.style( 'width' ), 10 );

				var i=0;
				// Update the chart generator settings:
				rose.legend( causes )
					.width( width )
					.height( height )
					.delay( 0 )
					.duration( 500 )
					.domain( [0, maxRadius] )
					.angle( function(d) { return i++; } )
					.area( function(d, i) { return [d[source],d[target]]; } );							

				// Bind the data and generate a new chart:
				figure.datum( dataset1 )
					.attr('class', 'chart figure1')
					.call( rose );	

				// Append a new figure to the DOM:
				figure = d3.select( 'body' )
					.append( 'figure' );

				// Get the figure width:
				width = parseInt( figure.style( 'width' ), 10 );

				// Update the chart generator settings:
				rose.width( width )
					.delay( 3000 );

				

				

				// Create a legend:
				Chart.legend( causes );
				// Create a slider:
				Chart.slider( 0, data.length, 1 );
				
				
			
}
var Chart1={};
function draw_rose(){
  
      var height = 55;

      for(i=0;i<10;i++){

          for(j=0;j<10;j++){
      data=[];
        generatedataset(gene_list[i],gene_list[j]);
        causes=[gene_list[i],gene_list[j]];
      
        
        var maxRadius = 10;

        var matrix1= []

        var dataset1 = data.slice(0,12);
        
        width = 55;
       
       var source=gene_list[i];
       var target=gene_list[j];
            
      var rose=Chart1.rose1();
         var k=0;
        rose .legend( causes )
          .width( width )
          .height( height )
          .delay( 0 )
          .duration( 500 )
          .domain( [0, maxRadius] )
          .angle( function(d) { return k++; } )
          .area( function(d, i) { return [d[source],d[target]]; } );   

        d3.select( "#some")
        .append("svg:svg")
        .datum( dataset1 )
        .attr("x", function (d) {return (i * 55)+45})
      .attr("y", function (d) {return (j * 55)+45})
          .call( rose );
          

        }
        //console.log(3);
      }
}