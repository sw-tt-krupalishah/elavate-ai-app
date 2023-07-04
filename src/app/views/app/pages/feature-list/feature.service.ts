import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FeatureService {
 
  supplyChain = [{module: "inventory management", feature: ["Stock tracking","order fulfillment","automated notifications"] },
                 {module: "Shopping cart",feature: ["Product selection","cart management","secure payment processing"]}]
  AIML = [{module: "Neural networks and deep learning algorithms",feature: ["Training and inference capabilities","Optimization algorithms","Model evaluation"]},
          {module: "Natural language processing (NLP) modules",feature: ["Text classification","Sentiment analysis","Language translation","Speech recognition"]},
          {module: "Image and video recognition modules",feature: ["Object detection","Image segmentation","Facial recognition","Video analysis"]},
          {module: "Predictive analytics and recommendation engines",feature: ["Data analysis","pattern recognition","predictive modeling","personalized recommendations"]}]              
  FinTech = [  {module: "Payment processing and gateway integration",feature:[]},
  {module: "Cryptocurrency and blockchain modules",feature:[]},
  {module: "Financial data analysis and reporting tools",feature:[]},
{module:"Risk management and compliance solutions",feature:[] }]
HealthTech = [{module: "Electronic health records (EHR) management systems",feature: ["Patient information storage","medical history tracking","interoperability"]},
{module: "Telemedicine and remote patient monitoring modules",feature: ["Video consultations","vital sign monitoring","remote diagnostics."]},
{module: "Medical imaging and diagnostic software",feature: ["Image acquisition","processing and analysis","computer-aided diagnosis"]},
{module: "Health information exchange (HIE) platforms",feature: ["Secure data sharing","interoperability standards","patient consent management"]}]
  AIMLModuleList = ["Neural networks and deep learning algorithms" , "Natural language processing (NLP) modules","Image and video recognition modules","Predictive analytics and recommendation engines"];
  FinTechModuleList = ["Payment processing and gateway integration", "Cryptocurrency and blockchain modules ","Financial data analysis and reporting tools","Risk management and compliance solutions"];
  HealthTechModuleList = ["Electronic health records (EHR) management systems","Telemedicine and remote patient monitoring modules","Medical imaging and diagnostic software","Health information exchange (HIE) platforms"];
  CybersecurityModuleList = ["Network security and firewall solutions","Threat detection and prevention modules","Encryption and data protection software","Security information and event management (SIEM) tools"];
  RenewableModuleList = ["Energy management and monitoring systems","Smart grid optimization and control software","Simulation and modeling tools for renewable energy sources","Energy storage and battery management solutions"];
  EdTechModuleList = ["Learning management system (LMS) platforms","Virtual classroom and online course creation tools","Assessment and grading modules","Personalized adaptive learning software"];
  VirtualRealityModuleList = ["Virtual reality (VR) and augmented reality (AR) development frameworks ","3D modeling and rendering tools","Interactive and immersive content creation modules","Gesture and motion tracking software"];
  TransportationModuleList = ["Route optimization and fleet management systems","Supply chain visibility and tracking modules","Warehouse management and inventory control software","Delivery management and logistics planning tools"];
  RemoteModuleList = ["Video conferencing and virtual meeting platforms","Project management and task tracking software","File sharing and document collaboration tools","Remote access and VPN solutions"];
  constructor(private http: HttpClient) { }
  getModuleList(industryType){
    if(industryType == "Supply chain"){
      console.log(this.supplyChain);
      return this.supplyChain;
    }
    else if(industryType == "Artificial Intelligence(AI) and Machine Learning(ML)"){
      return this.AIML;
    }
    else if(industryType == "Financial Technology (FinTech)"){
      return this.FinTech;
    }
    else if(industryType == "HealthTech"){
      return this.HealthTech;
    }
    else if(industryType == "Cybersecurity"){
      return this.CybersecurityModuleList;
    }
    else if(industryType == "Renewable Energy"){
      return this.RenewableModuleList;
    }
    else if(industryType == "EdTech"){
      return this.EdTechModuleList;
    }
    else if(industryType == "Virtual and Augmented Reality"){
      return this.VirtualRealityModuleList;
    }
    else if(industryType == "Transportation and Logistics"){
      return this.TransportationModuleList;
    }
    else if(industryType == "Remote Work and Collaboration"){
      return this.RemoteModuleList;
    }
  }
  getApp(selectedList){
    if (selectedList) {
      return this.http.post(`https://abf9-111-93-95-94.in.ngrok.io/api/get_features`,selectedList).pipe(map(rsp => rsp));
    }
  }
}
