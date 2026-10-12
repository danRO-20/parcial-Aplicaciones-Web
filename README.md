# GeoMine Solutions Machinery & Telemetry Management

## Overview
GeoMine Solutions Machinery & Telemetry Management is a Vue 3 + Vite application organized with a domain-driven design (DDD) style. The project demonstrates how to model features by bounded context and keep business concepts separated from UI and infrastructure concerns.

The current implementation actively uses the Publishing context and includes an IAM context that is partially wired at router level.

## Goals
- Show a practical front-end architecture with DDD-inspired layering.
- Keep domain concepts explicit (`entity`, `resource`, `assembler`, `store`).
- Provide a clean learning base for CRUD use cases, localization, and routing.

## Tech Stack
- Vue 3
- Vite
- Pinia
- Vue Router
- Vue I18n
- PrimeVue + PrimeFlex + PrimeIcons
- Axios
- `json-server` for local mock API

## Project Structure (DDD-Oriented)
```text
src/
  inspections/                       
	domain/                    
	application/               
	infrastructure/           
	presentation/              

  section/                  
	domain/model/              
	application/               
	infrastructure/            
	presentation/              

  shared/                      
	infrastructure/            
	presentation/              
```

## Bounded Contexts

inspection
section
shared

Author: Nestor Rojas