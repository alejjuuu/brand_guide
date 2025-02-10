# AWS
```mermaid
gantt
title Project Timeline
dateFormat YYYY-MM-DD
excludes weekends
section Carlos Segarra
Microservices for API & File Watcher     :active, des1, 2023-09-25, 7d
FAST API Development                    :after des1, 2023-10-01, 7d
File Watch Service                      :after des1, 2023-10-01, 7d
Pytests Creation                        :active, after des1, 7d
Dockerization of Services               :active, after des1, 14d
Refactoring & Logging Standards         :active, des2, 2023-10-02, 7d
Standard Logger & Directory Structure   :active, after des2, 2023-10-08, 7d
Finalizing API Routes                   :active, after des2, 2023-10-15, 7d
Research on FastAPI & RabbitMQ          :active, after des2, 2023-10-15, 7d
Integrating RabbitMQ                    :active, after des2, 2023-10-15, 7d
Brandi Chatbot & FastAPI Routes         :active, des3, 2023-10-15, 7d
Collaboration with Pedro                :active, after des3, 7d
Adding Pytests & Streamlit Demo         :active, after des3, 7d
Auth0 & Streamlit Demo Deployment       :done, after des3, 2023-10-29, 7d

section Pedro Pacheco
Stable Horde & Diffusion Prompts        :active, ped1, 2023-09-25, 7d
Horde Client Refactoring                :active, after ped1, 2023-10-01, 7d
Project Directory & File Structure      :active, after ped1, 2023-10-08, 7d
Code Quality & Pytests                  :active, after ped1, 2023-10-15, 7d
Code Modularity & Stability             :active, after ped1, 2023-10-15, 7d
Horde Client Refactor & Robustness      :active, ped2, 2023-10-15, 7d
Writing Pytests & Integration           :active, after ped2, 2023-10-22, 7d
Integration & "Chatting to Data" Demo   :active, after ped2, 2023-10-29, 7d

section Johnathan Grossman
Site Optimization & Bug Fixes           :active, jon1, 2023-09-25, 7d
Deployment & Research                   :active, after jon1, 2023-10-01, 7d
Bash & Node.js Scripts                  :active, after jon1, 2023-10-08, 7d
Deployment Git Action & Firehose 360    :active, after jon1, 2023-10-15, 7d
Docker Container & Chat Frontend        :active, jon2, 2023-10-15, 7d
OAuth & Chat App Deployment             :active, after jon2, 2023-10-22, 7d

section Alejandro Velasquez
QA Testing & Tool Creation              :active, ale1, 2023-09-25, 7d
Dynamic Testing Project                 :active, after ale1, 2023-10-01, 7d
Learning & Containerization             :active, after ale1, 2023-10-08, 7d
QA Testing & Docker Playwright          :active, after ale1, 2023-10-15, 7d
QA & Front-end Development              :active, ale2, 2023-10-22, 7d

```




```mermaid
gantt
title Project Timeline
dateFormat YYYY-MM-DD
excludes weekends
section Carlos Segarra
Microservices for API & File Watcher     :done, des1, 2023-09-25, 7d
FAST API Development                    :done, after des1, 2023-10-01, 7d
File Watch Service                      :done, after des1, 2023-10-01, 7d
Pytests Creation                        :done, after des1, 7d
Dockerization of Services               :done, after des1, 14d
Refactoring & Logging Standards         :done, des2, 2023-10-02, 7d
Standard Logger & Directory Structure   :done, after des2, 2023-10-08, 7d
Finalizing API Routes                   :done, after des2, 2023-10-15, 7d
Research on FastAPI & RabbitMQ          :done, after des2, 2023-10-15, 7d
Integrating RabbitMQ                    :done, after des2, 2023-10-15, 7d
Brandi Chatbot & FastAPI Routes         :done, des3, 2023-10-15, 7d
Collaboration with Pedro                :done, after des3, 7d
Adding Pytests & Streamlit Demo         :done, after des3, 7d
Auth0 & Streamlit Demo Deployment       :done, after des3, 2023-10-29, 7d

section Pedro Pacheco
Stable Horde & Diffusion Prompts        :done, ped1, 2023-09-25, 7d
Horde Client Refactoring                :done, after ped1, 2023-10-01, 7d
Project Directory & File Structure      :done, after ped1, 2023-10-08, 7d
Code Quality & Pytests                  :done, after ped1, 2023-10-15, 7d
Code Modularity & Stability             :done, after ped1, 2023-10-15, 7d
Horde Client Refactor & Robustness      :done, ped2, 2023-10-15, 7d
Writing Pytests & Integration           :done, after ped2, 2023-10-22, 7d
Integration & "Chatting to Data" Demo   :done, after ped2, 2023-10-29, 7d

section Johnathan Grossman
Site Optimization & Bug Fixes           :done, jon1, 2023-09-25, 7d
Deployment & Research                   :done, after jon1, 2023-10-01, 7d
Bash & Node.js Scripts                  :done, after jon1, 2023-10-08, 7d
Deployment Git Action & Firehose 360    :done, after jon1, 2023-10-15, 7d
Docker Container & Chat Frontend        :done, jon2, 2023-10-15, 7d
OAuth & Chat App Deployment             :done, after jon2, 2023-10-22, 7d

section Alejandro Velasquez
QA Testing & Tool Creation              :done, ale1, 2023-09-25, 7d
Dynamic Testing Project                 :done, after ale1, 2023-10-01, 7d
Learning & Containerization             :done, after ale1, 2023-10-08, 7d
QA Testing & Docker Playwright          :done, after ale1, 2023-10-15, 7d
QA & Front-end Development              :done, ale2, 2023-10-22, 7d
```



```mermaid
gantt
title Project Timeline
dateFormat YYYY-MM-DD
excludes weekends
section Carlos Segarra
Microservices for API & File Watcher     :des1, 2023-09-25, 7d
FAST API Service Development            :after des1, 2023-10-01, 7d
File Watch Service                      :2023-10-01, 7d
Pytests Creation                        :after des1, 7d
Dockerization of Services               :2023-10-01, 14d
Refactoring & Logging Standards         :des2, 2023-10-02, 7d
Standard Logger & Directory Structure   :2023-10-08, 7d
Finalizing API Routes                   :2023-10-15, 7d
Research on FastAPI & RabbitMQ          :2023-10-15, 7d
Integrating RabbitMQ                    :2023-10-15, 7d
Brandi Chatbot & FastAPI Routes         :des3, 2023-10-15, 7d
Collaboration with Pedro                :2023-10-15, 7d
Adding Pytests & Streamlit Demo         :2023-10-15, 7d
Auth0 & Streamlit Demo Deployment       :2023-10-22, 7d

section Pedro Pacheco
Stable Horde & Diffusion Prompts        :ped1, 2023-09-25, 7d
Horde Client Refactoring                :2023-10-02, 7d
Project Directory & File Structure      :2023-10-08, 7d
Code Quality                    :2023-10-15, 7d
Code Modularity & Stability             :2023-10-15, 7d
Horde Client Refactor & Robustness      :2023-10-15, 7d
Collaboration with Carlos               :2023-10-15, 7d
Integration with main API start         :2023-10-22, 7d
Integration with main API        :2023-10-29, 7d
Training custom Llama model        :2023-10-29, 7d

section Johnathan Grossman
Tree Site Optimization & Bug Fixes           :jon1, 2023-09-25, 7d
Deployment & Research                   :2023-10-02, 7d
Automated Deployment Scripts            :2023-10-08, 7d
Deployment Git Action                   :2023-10-15, 7d
Firehose 360                            :2023-10-15, 7d
Dockerized Deployment script            :2023-10-15, 7d
Chat Frontend                           :2023-10-15, 7d
OAuth                                  :2023-10-22, 7d
Chat App Deployment                     :2023-10-22, 7d
Frontend Data Streaming                 :2023-10-22, 7d
Chat History                            :2023-10-28, 7d
Chat Production Deployment              :2023-10-28, 7d

section Alejandro Velasquez
QA Testing & Tool Creation              :ale1, 2023-09-25, 7d
Dynamic Testing Project                 :2023-10-02, 7d
Learning & Containerization             :2023-10-08, 7d
QA Testing & Docker Playwright          :2023-10-15, 7d
QA & Front-end Development              :2023-10-22, 7d
```

