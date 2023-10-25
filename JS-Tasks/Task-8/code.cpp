#include <bits/stdc++.h>
using namespace std;

vector<int> dijkstra(int V, vector<vector<pair<int, int>>> adj, int S) {
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

    vector<int> distTo(V+1, INT_MAX);
    distTo[S] = 0;
    
    pq.push({0, S});
    while (!pq.empty()) {
        int node = pq.top().second;
        int dis = pq.top().first;
        pq.pop();
        for (auto it : adj[node]) {
            int v = it.first;
            int w = it.second;
            if (dis + w < distTo[v]) {
                distTo[v] = dis + w;
                pq.push({distTo[v], v});
            }
        }
    }
    return distTo;
}

int main() {
    int noOfVertices, noOfEdges;
    cin >> noOfVertices >> noOfEdges;
    
    vector<vector<pair<int, int>>> adjList(noOfVertices+1);
    
    for (int i = 0; i < noOfEdges; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        adjList[u].push_back({v, w});
    }

    vector<int> res = dijkstra(noOfVertices, adjList, 1); // Change the starting node if needed

    for (int i = 1; i < res.size(); i++) {
        cout << "Shortest distance from node 0 to node " << i << " is: " << res[i] << endl;
    }

    return 0;
}
