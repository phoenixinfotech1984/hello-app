# hello-app
Node JS Hello App Deploy in K8s Cluster and access through ISTIO

**DockerHub login, Build Image, Push Image
```
docker login
docker build -t {dockerhubid}/helloapp:v1 .
docker push {dockerhubid}/helloapp:v1
```

# Part-1

**Deploye Stable Version**
```
kubectl apply -f deployment.yaml
```

**To Access App Create Gateway and Virtualserivce**
```
kubectl apply -f gateway.yaml
kubectl apply -f virtualservice.yaml
```

**Access App Via Ingressgateway External IP**
```
http://externaip/hello/200
```

# Part-2

**Different Deployment strategy(Canary Release)**
- Blue-Green Deployment
- A/B Testing
- Traffic Splitting 

**Deploy Canary Version**
```
kubectl apply -f deployment-canary.yaml
```

**Create Destination Rule**
```
kubectl apply -f destination.yaml
```

**Blue-Green(change subset to canary in virtualservice.yaml)**
```
kubectl apply -f virtualservice-bluegreen.yaml
```

**A/B Testing**
```
kubectl apply -f virtualservice-header.yaml
kubectl apply -f virtualservice-browser.yaml
```

**Traffic Splitting**
```
kubectl apply -f virtualservice-weight.yaml
```

