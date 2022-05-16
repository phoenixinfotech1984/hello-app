# hello-app
Node JS Hello App Deploy in K8s Cluster and access through ISTIO

**DockerHub login, Build Image, Push Image**
```
docker login
docker build -t {dockerhubid}/helloapp:v1 .
docker push {dockerhubid}/helloapp:v1
```

# Part-1

**Deploye Stable Version**
```
kubectl apply -f part-1/deployment.yaml
```

**To Access App Create Gateway and Virtualserivce**
```
kubectl apply -f part-1/gateway.yaml
kubectl apply -f part-1/virtualservice.yaml
```

**Access App Via Ingressgateway External IP**
```
http://externaip/hello/200
```

# Part-2

**Change Code**

```
res.write('<h1>Hello World! => Version Stable</h1>');
```

To

```
res.write('<h1>Hello World! => Version Canary</h1>');
```

**Build new image of your change v2**
```
docker build -t {dockerhubid}/helloapp:v2 .
docker push {dockerhubid}/helloapp:v2
```

**Different Deployment strategy(Canary Release)**
- Blue-Green Deployment
- A/B Testing
- Traffic Splitting 

**Deploy Canary Version**
```
kubectl apply -f part-2/deployment-canary.yaml
```

**Create Destination Rule**
```
kubectl apply -f part-2/destination.yaml
```

**Blue-Green(change subset to canary in virtualservice.yaml)**
```
kubectl apply -f part-2/virtualservice-bluegreen.yaml
```

**A/B Testing**
```
kubectl apply -f part-2/virtualservice-header.yaml
kubectl apply -f part-2/virtualservice-browser.yaml
```

**Traffic Splitting**
```
kubectl apply -f part-2/virtualservice-weight.yaml
```

# Part-3

**Flagger Cannary**
```
kubectl apply -f part-3/canary.yaml
```

