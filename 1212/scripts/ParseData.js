

function generatedataset(source,target){

	var sourcevalue=0;
	var targetvalue=0;
	var data1=new Object();	

	for(var i=0;i<10;i++){
		data1=new Object();
		if(source==target){
			
			if(cBioPortalData1[source][0][i]!=undefined){
				sourcevalue=Math.round(cBioPortalData1[source][0][i]["Frequency"]);
				if(sourcevalue<=0)
					continue;
				targetvalue=0;
				//data.push({ label:cBioPortalData1[target][0][i]["Study"], srcval:[sourcevalue,source], trgval:[targetvalue,target], gene_name:target });
				data1.label=cBioPortalData1[target][0][i]["Study"];
				data1[source]=sourcevalue;
				//data1[target]=targetvalue;
				data.push(data1);
				continue;
			}
			else
				continue;
		}
		if(cBioPortalData1[source][0][i]==undefined){
			sourcevalue=0;
			if(cBioPortalData1[target][0][i]==undefined){
				targetvalue=0;	
			}
			else{
				targetvalue=Math.ceil(cBioPortalData1[target][0][i]["Frequency"]);
				//data.push({ l:cBioPortalData1[target][0][i]["Study"], srcval:[sourcevalue,source], trgval:[targetvalue,target], gene_name:target});
				data1.label=cBioPortalData1[target][0][i]["Study"];
				data1[source]=sourcevalue;
				data1[target]=targetvalue;
				data.push(data1);
			}

		}
		else{
			sourcevalue=Math.ceil(cBioPortalData1[source][0][i]["Frequency"]);
			if(cBioPortalData1[target][0][i]==undefined){
				targetvalue=0;
				//data.push({ l:cBioPortalData1[source][0][i]["Study"], srcval:[sourcevalue,source], trgval:[targetvalue,target], gene_name:source});	
				data1.label=cBioPortalData1[source][0][i]["Study"];
				data1[source]=sourcevalue;
				data1[target]=targetvalue;
				data.push(data1);
			}
			else{
				targetvalue=Math.ceil(cBioPortalData1[target][0][i]["Frequency"]);
				//data.push({ l:cBioPortalData1[target][0][i]["Study"], srcval:[sourcevalue,source], trgval:[targetvalue,target], gene_name:target});
				data1.label=cBioPortalData1[target][0][i]["Study"];
				data1[source]=sourcevalue;
				data1[target]=targetvalue;
				data.push(data1);
		}
		
	}

}
}
