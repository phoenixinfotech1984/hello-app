# hello-app
Node JS Hello App Deploy in K8s Cluster and access through ISTIO

**Deploye Node JS Hello App Stable Version**

```
kubectl apply -f deployment.yaml
```

**To Access Node JS Hello App Create Gateway and Virtualserivce**


```
kubectl apply -f gateway.yaml
kubectl apply -f virtualservice.yaml
```

**Access Node JS Hello App Via Ingressgateway External IP**

```
http://externaip/hello/200
```

**Different Deployment strategy(Canary Release)**

- Blue-Green Deployment
- A/B Testing
- Traffic Splitting 
